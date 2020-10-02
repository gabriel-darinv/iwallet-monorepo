import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme{
    title:string;
    colors:{
      primary:string; 
      secondary:string; 
      tertiary:string; 
      quaternary:string; 
      five:string; 
      negative:string;
      positive:string;
      background:string; 
      background2:string; 
      background3:string; 
      text:string; 
      text2:string; 
      white:string;
      black:string;
    }
  }
}
