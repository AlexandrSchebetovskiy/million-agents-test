import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {TreeNode} from './treeNode.interface';


@Component({
  selector: 'tree-node',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {

  @Input() treeNodes: TreeNode[] = [];
  @Input() isChild: boolean = false; // Для добавления стиля вложенности
  @Output() nodeClick = new EventEmitter<any>();

  toggleNode(node: TreeNode): void {
    node.isExpanded = !node.isExpanded;
  }

  onNodeClick(node: TreeNode): void {
    this.nodeClick.emit(node);
  }





}
