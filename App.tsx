import * as React from 'react';
import './style.css';

export const TREE = [
  {
    name: 'Final agreement with CEO',
    children: [
      {
        name: 'Final Final',
        children: [
          { name: 'Meeting 1', children: [{ name: 'Manager' }] },
          { name: 'Meeting 2', children: [{ name: 'Sales' }] },
        ],
      },
    ],
  },
  {
    name: 'Cashier',
  },
  {
    name: '2023',
    children: [
      {
        name: 'January meeting',
        children: [
          { name: 'Waiting for Approval', children: [{ name: 'IT' }] },
        ],
      },
    ],
  },
];

const FolderTreeNode = ({ node }) => {
  return (
    <ul>
      <li>{node.name}</li>
      {node.children &&
        node.children.map((child) => (
          <FolderTreeNode key={child.name} node={child} />
        ))}
    </ul>
  );
};

export default function App() {
  return (
    <div>
      {TREE.map((treeData) => (
        <FolderTreeNode node={treeData} />
      ))}
    </div>
  );
}
