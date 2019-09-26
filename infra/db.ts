import * as mongoose from 'mongoose';

class dataBase {
    private db_URL = 'mongodb://localhost:27017/db_portal'

    createConnection(){
        mongoose.connect(this.db_URL)
    }
}

export default dataBase; 