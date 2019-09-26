import * as mongoose from 'mongoose';
import newsSchems from '../models/newsSchems';

export default mongoose.model("news", newsSchems);
