import { Document } from 'mongoose';
import { IAccount, ItrySaveData } from "./app.interface";
export interface IMemberDocument extends IAccount, Document { }

export interface ISaveData extends ItrySaveData, Document { }