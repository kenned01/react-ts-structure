import { View } from '../../Interfaces/View.i';

export default function PrivateView(props: any)
{
  let route: View = props.view;

  return (
    <>
      <route.component />
    </>
  );
}