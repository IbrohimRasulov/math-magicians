import renderer from 'react-test-renderer';
import Quote from '../Quote';

test('Render Quote component', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});
