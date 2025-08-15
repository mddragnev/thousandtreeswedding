import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { firstValueFrom, map } from 'rxjs';

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
    return collectionSnapshots(this.db).pipe(map((res:any) => res.map((data:any) => {
      const id = data.id;
      const docData = data.data();
      return { ...docData, id };
    })));
  }

  public async save(data: any): Promise<any> {
    const response: any = await firstValueFrom(this.getAll());

    const group = response.length >= 1 ? Math.max(...(response.map((x: any) => x.group))) + 1 : 1;
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
