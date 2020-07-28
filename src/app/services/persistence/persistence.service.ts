import { Injectable } from '@angular/core';
import { openDB } from 'idb';
import { Observable, from } from 'rxjs';


const VID_DB_NAME = 'vidDB';
const VID_STORE_NAME = 'videos';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
	private vidDB;

	async connect(): Promise<void> {
		this.vidDB = await openDB(VID_DB_NAME, 2, {
			upgrade(db) {
				db.createObjectStore(VID_STORE_NAME, {
					keyPath: 'id',
					autoIncrement: true
				});
			},
		});
	}

	getAll(storeName: string): Observable<any> {
		return from(this.vidDB.getAll(storeName));
	}

	save(storeName: string, item: any): Observable<any> {
		return from(this.vidDB.put(storeName, item));
	}

  // constructor() { }
}
