import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../shared/datastorage.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();
  constructor(private dsService : DataStorageService) { 
    
  }
  onSelect(feature : string){
    this.selectedFeature.emit(feature);
  }

  onSaveData(){
    this.dsService.storeData().subscribe(
      (response : Response)=>{
        console.log(response.json());
      }
    )
    }

    onFetchData(){
      this.dsService.fetchData();
    }

  ngOnInit() {
  }
  

}
