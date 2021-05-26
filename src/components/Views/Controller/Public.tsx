import { View } from '../../Interfaces/View.i';

export default function PublicView(props: any)
{
  let route: View = props.view;

  return (
    <>
      <route.component />
    </>
  );
}