import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const orderSchema = new Schema({
    customerInfo: {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        mobile: {
            type: String,
            required: false
        },
        car: {
            model: String,
            number: String,
            required: true
        }
    },
    autoCenter: {
        type: Schema.Types.ObjectId,
        ref: "AutoCenter",
        required: true
    },
    detail: {
        description: String,
        isToing: {
            type: Boolean,
            default: false,
        },
        toeDate:{
            type: Schema.Types.Date,
            required: function(){
                return this.detail.isToing
            }
        },
        address: {
            type: String,
            required: function(){
                return this.this.detail.isToing
            }
        }
    },
    status: {
        type: String,
        enum: ["TAKEN","PENDING","PROCESSING","COMPLETED","NOT-TAKEN"],
        default: "NOT-TAKEN"
    },
    paymentInfo: {
        total: Schema.Types.Decimal128,
        card: Schema.Types.BigInt
    }
},{timestamps: true})

orderSchema.plugin(mongooseAggregatePaginate)

export const Order = mongoose.model("Order",orderSchema)