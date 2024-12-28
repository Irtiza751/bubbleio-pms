"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  description: string;
}

export interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Search products..." className="max-w-sm" />
        <Button>
          <Plus />
          <span>Add Product</span>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Description</TableHead>
              {/* action column */}
              <TableHead>{null}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
