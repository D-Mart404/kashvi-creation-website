import nodemailer from "nodemailer";
import Invoice from "../models/Invoice.js";
import { getProductById } from "../data/products.js";
import { env } from "../config/env.js";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const buildInvoiceItems = (items = []) => {
  return items.map((item) => {
    const product = getProductById(item.id);
    const quantity = Number(item.quantity);

    if (!product || !Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Invalid invoice item");
    }

    return {
      productId: product.id,
      name: product.name,
      quantity,
      price: product.price,
    };
  });
};

const buildInvoiceHtml = ({ invoice, items, amount, username }) => {
  const itemRows = items
    .map(
      (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(item.name)}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price * item.quantity}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; color: #222; max-width: 680px; margin: 0 auto;">
      <h2 style="margin-bottom: 4px;">Kashvi Creation Invoice</h2>
      <p style="color: #666; margin-top: 0;">Order #${escapeHtml(invoice.orderId)}</p>
      <p>Hi ${escapeHtml(username)},</p>
      <p>Thank you for your order. Your invoice details are below.</p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background: #f7f7f7;">
            <th style="padding: 10px; text-align: left;">Item</th>
            <th style="padding: 10px; text-align: center;">Qty</th>
            <th style="padding: 10px; text-align: right;">Price</th>
            <th style="padding: 10px; text-align: right;">Total</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>

      <h3 style="text-align: right;">Grand Total: ₹${amount}</h3>
      <p style="color: #666;">Date: ${new Date(invoice.date).toLocaleDateString()}</p>
    </div>
  `;
};

const sendInvoiceEmail = async ({ invoice, items, amount, user }) => {
  if (!env.emailUser || !env.emailPass) {
    return { sent: false, reason: "Gmail email credentials are not configured" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.emailUser,
      pass: env.emailPass,
    },
  });

  await transporter.sendMail({
    from: `"Kashvi Creation" <${env.emailUser}>`,
    to: user.email,
    subject: `Invoice for Order #${invoice.orderId}`,
    html: buildInvoiceHtml({
      invoice,
      items,
      amount,
      username: user.username,
    }),
  });

  return { sent: true };
};

export const createInvoice = async (req, res) => {
  try {
    const items = buildInvoiceItems(req.body.items);

    if (items.length === 0) {
      return res.status(400).json({ success: false, message: "Invoice must contain at least one item" });
    }

    const amount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const invoice = await Invoice.create({
      user: req.user._id,
      username: req.user.username,
      email: req.user.email,
      amount,
      items,
    });

    let emailStatus;
    try {
      emailStatus = await sendInvoiceEmail({
        invoice,
        items,
        amount,
        user: req.user,
      });
    } catch (error) {
      console.error("Invoice email failed:", error);
      emailStatus = { sent: false, reason: "Invoice was saved, but email sending failed" };
    }

    return res.status(201).json({
      success: true,
      message: emailStatus.sent
        ? "Invoice created and sent to your email!"
        : `Invoice created successfully. ${emailStatus.reason}.`,
      emailSent: emailStatus.sent,
      invoice,
    });
  } catch (error) {
    console.error("Error creating invoice:", error);
    return res.status(400).json({ success: false, message: "Failed to create invoice" });
  }
};

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user._id }).sort({ date: -1 });
    return res.json({ success: true, invoices });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch invoices" });
  }
};
