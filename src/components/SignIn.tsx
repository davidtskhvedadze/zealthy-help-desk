"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "./ui/button";
import { toast, useToast } from "./ui/use-toast";

const signSchema = z.object({
    username: z.string().min(1, { 
        message: 'Username is required' 
    }).max(50, { 
        message: 'Username must be less than 50 characters' 
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    }).max(50, {
        message: 'Password must be less than 50 characters'
    })
  });

  export type FormData = {
    username: string;
    password: string;
  };

export function SignIn() {
  const form = useForm<z.infer<typeof signSchema>>({
    resolver: zodResolver(signSchema)
  });

    const handleSubmit = async (data: FormData) => {
        try {
            const response = await fetch('/api/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const user = await response.json();
                toast({
                    title: 'Admin authenticated',
                    description: 'You have successfully signed in'
                })
                form.reset();
            } else {
                const errorData = await response.json();
                toast({
                    title: 'Failed to sign in',
                    description: errorData.message
                })
            }
        } catch (error) {
            console.error(error);
        }
    };

return (
    <DropdownMenu>
      <DropdownMenuTrigger>Sign in</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>Sign in</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Form {...form}>
          <form className="max-w-md w-full flex flex-col gap-4 mb-4 p-2 mr-2" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField control={form.control} name="username" render={({field}) => {
              return <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" type="text" {...field} value={field.value || ''} tabIndex={0}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}/>
            <FormField control={form.control} name="password" render={({field}) => {
              return <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} value={field.value || ''} tabIndex={1}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            }}/>
            <Button type="submit" value="Sign In">Sign in</Button>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
)
}