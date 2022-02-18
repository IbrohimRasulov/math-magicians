import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

test('Render Navbar component', () => {
  const tree = renderer.create(<Navbar />);
  expect(tree).toMatchSnapshot();
});
