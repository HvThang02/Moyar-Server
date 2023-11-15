const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        sizes: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Chưa Được Xử Lý",
      enum: [
        "Chưa Được Xử Lý",
        "Thanh Toán Khi Nhận Hàng",
        "Đang Xử Lý",
        "Đã Gửi Đi",
        "Đã Hủy",
        "Giao Hàng Thành Công",
      ],
    },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
