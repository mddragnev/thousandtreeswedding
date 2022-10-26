import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private path= '/people';

  private db: any;

  constructor(private database: Firestore) { 
    this.db = collection(database, this.path);
  }

  getAll(): any {
    return collectionData(this.db, {idField: "id"});
  }
}
