import Relay from 'react-relay';

export class LayoutQuery extends Relay.Route {
  static queries = {
    villagePlan: () => Relay.QL`
      query {
        villagePlan
      }`
  };
  static routeName = 'LayoutQuery';
}
