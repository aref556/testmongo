import { Document } from 'mongoose';
import { IAccount } from "./app.interface";
export interface IMemberDocument extends IAccount, Document { }