import { Schema, model, models } from 'mongoose';

const studentSchema = new Schema({
    studentName: String,
    studentID: String,
    dateBirth: String,
    officialClass: String,
    noAccents: String,
});

const StudentModel = models.Student || model('Student', studentSchema);

export default StudentModel;