export interface LinkProps {
  text: string;
  link: string;
}


export interface TabProps extends LinkProps{
  index: LinkProps[];
}