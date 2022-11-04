import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, CollectionReference, Firestore } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private path = '/people';

  private db: CollectionReference<any>;

  constructor(private database: Firestore) {
    this.db = collection(database, this.path);
  }

  public getAll(): any {
    return collectionData(this.db, { idField: "id" });
  }

  public async save(data: any): Promise<any> {
    const response: any = await firstValueFrom(this.getAll());
    
    const lastPerson = response.findLast((x:any) => x.group);
    const group = lastPerson.group + 1;
    data.forEach((obj: any) => {
      obj['group'] = group;
      addDoc(this.db, obj)
      .then(res => {
      })
      .catch(err => {
        console.log(err);
      });
    });
    
  }
}
