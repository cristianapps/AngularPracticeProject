import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { ConvertService } from '../../services/convert.service';

interface article {
  title: string;
  text: string;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Product category",
    children: [
      { name: "Premium retail" },
      { name: "Retail" },
      { name: "Lorem" },
      { name: "Ipsum" },
    ],
  },
  {
    name: "Product sub-category",
    children: [
      {
        name: "Latex plain",
        children: [{ name: "Latex plain 1" }, { name: "Latex plain 2" }],
      },
      {
        name: "Latext ink",
        children: [{ name: "Latext ink 1" }, { name: "Latext ink 2" }],
      },
    ],
  },
  {
    name: "Color group",
    children: [
      { name: "Glossy" },
      { name: "Metalic" },
      { name: "Transparent" },
      { name: "Pastel" },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  first_price: any = 100;
  second_price: any = 75;
  third_price: any = 240;
  convert_price: any = "";

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private convertService: ConvertService) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    this.convert_price = this.convertService.convertPrice();
  }

  isShown: boolean = false; // hidden by default

  togglePrice() {
    this.isShown = !this.isShown;
  }

  SubArticle1: article = {
    title: "HOME.SUBARTICLE.title1",
    text: "Invokes the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with iterator(value, key, obj), where value is the value of an object property or an array element, key is the object property key or array element index and obj is the obj itself. Specifying a context for the function is optional.",
  };
  SubArticle2: article = {
    title: "HOME.SUBARTICLE.title2",
    text: "Extends the destination object dst by copying own enumerable properties from the src object(s) to dst. You can specify multiple src objects. If you want to preserve original objects, you can do so by passing an empty object as the target: var object = angular.extend({}, object1, object2).",
  };
  SubArticle3: article = {
    title: "HOME.SUBARTICLE.title3",
    text: "Deeply extends the destination object dst by copying own enumerable properties from the src object(s) to dst. You can specify multiple src objects. If you want to preserve original objects, you can do so by passing an empty object as the target: var object = angular.merge({}, object1, object2).",
  };
}
