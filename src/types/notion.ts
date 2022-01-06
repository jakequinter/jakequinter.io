export type Posts = {
  results: Post[]; 
 };
 
 type Post = {
   id: string;
   properties: {
     created_at: CreatedAt;
     description: Description;
     title: Title;
   }
 }
 
 type CreatedAt = {
   id: string;
   type: string;
   date: {
     end: string | null;
     start: string;
     timezone: string | null;
   }
 }
 
 type Description = {
   id: string;
   type: string;
   rich_text: RichText[];
 }
 
 type RichText = {
   plain_text: string;
 }

 type Title = {
  id: string;
  type: string;
  title: SubTitle[];
 }

 type SubTitle = {
  plain_text: string;
 }