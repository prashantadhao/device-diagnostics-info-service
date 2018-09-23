import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Page } from '../models/page';


@Component({
  selector: 'app-stylish-pagination',
  templateUrl: './stylish-pagination.component.html',
  styleUrls: ['./stylish-pagination.component.css']
})
export class StylishPaginationComponent implements OnInit {
  @Input() maxPages: number;
  @Input() current: number;
  @Input() postsPerPage: number[];
  @Input() itemsPerPage: number;

  @Output() changePage = new EventEmitter();

  pages: any[] = [];
  pageModel: Page = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };

  constructor() { }

  ngOnInit() {
    if (this.maxPages) {
      this.createPages();
    }
    this.current = 1;
  }

  setPage(page: number, perPage: number) {
    this.pageModel.page = page;
    this.pageModel.itemsPerPage = perPage;
    this.changePage.emit(this.pageModel);
  }

  createPages() {
    for (let i = 1; i <= this.maxPages; i++) {
      this.pages.push(i);
    }
  }
}
