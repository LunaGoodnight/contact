import renderer from "react-test-renderer";
import { ModalContentWrapper } from "./_modal/ModalContentWrapper";

it("renders modal wrapper correctly", () => {
  const tree = renderer
    .create(
      <ModalContentWrapper>
        <div>test wrapper</div>
      </ModalContentWrapper>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
