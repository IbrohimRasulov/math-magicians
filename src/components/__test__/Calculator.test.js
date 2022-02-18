import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('Render Calculator component', () => {
  const tree = renderer.create(<Calculator />);
  expect(tree).toMatchSnapshot();
});
