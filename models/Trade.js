import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema(
  {
    trend:{
        fourHourTrend:{
            type: String,
            required: true,
        },
        oneDayTrend:{
            type: String,
            required: false,
        }
    }
    ,
    fibRetracement:{
        type: Number,
        required: true,
    },
    restSwingPoint:{
        type: Boolean,
        required: true,
    },
    volatility:{
        minfifteen:{
            type: Boolean,
            required: false,
            default: false
        },
        hourone:{
            type: Boolean,
            required: false,
            default: false,
            default: false
        },
        hourfour:{
            type: Boolean,
            required: false,
            default: false
        },

    },
    close:{
        type: String,
        required: true,
        
    },
    correlation:{
        type: Boolean,
        required: false,
    },
    volume:{
        type: Number,
        require: true
    },
    dateExecuted:{
        type: Date,
    }

  });

  export default mongoose.model.Trade || mongoose.model("Trade",TradeSchema)