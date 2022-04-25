import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
interface Item {
  text: string;
  value: number;
}
@Component({
  selector: 'app-kendomultiselect',
  templateUrl: './kendomultiselect.component.html',
  styleUrls: ['./kendomultiselect.component.scss']
})
export class KendomultiselectComponent implements OnInit {
  commontablist: any;
  selectedList: any;
  copyToClipboard: any;
  copytxt: any;
  constructor(public _common: CommonService, public _copy: CopyserviceService) { }
  public listItems: Array<Item> = [{ text: "Small", value: 1 }, { text: "Medium", value: 2 }, { text: "Large", value: 3 },];
  public selectedItems: Item[] = [this.listItems[1]];


  ngOnInit(): void {
    this.commontablist = this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard = this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
  }
  openTabList(commontablist: any) {
    this.selectedList = commontablist;

  }

}
