import renderer from 'react-test-renderer';
import Home from '../Home';

test('Render Home component', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
