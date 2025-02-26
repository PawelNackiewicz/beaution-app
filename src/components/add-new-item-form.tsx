// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "../molecules/Form";
// import { ChevronRight } from "lucide-react";
// import { Input } from "../atoms/Input";
// import { useApp } from "../../AppContext";

// const FormSchema = z.object({
//   title: z
//     .string()
//     .trim()
//     .min(3, { message: "Title must be at least 3 characters long" })
//     .max(20, { message: "Title must be at most 20 characters long" }),
// });

// type FormData = z.infer<typeof FormSchema>;

// export const AddNewItemForm = () => {
//   const { addTask } = useApp();
//   const form = useForm<FormData>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       title: "",
//     },
//   });

//   const handleSubmit = (data: FormData) => {
//     addTask(data.title);
//     form.reset();
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(handleSubmit)}>
//         <div className="flex items-center justify-between border min-h-12 rounded-lg text-custom-black px-4">
//           <FormField
//             control={form.control}
//             name="title"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input {...field} placeholder="New task input" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <button type="submit" data-testid="submitBtn">
//             {" "}
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </form>
//     </Form>
//   );
// };
