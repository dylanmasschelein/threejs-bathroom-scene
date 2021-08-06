import Handle from "./Handle";
const VanityHandles = ({ open, toggle }) => {
  return (
    <>
      <Handle
        toggle={toggle}
        position={!open ? [-6.4, 1, -2] : [-6.4, 1, 0.2]}
      />
      <Handle
        toggle={toggle}
        position={!open ? [-4.7, 1, -2] : [-4.7, 1, 0.2]}
      />
      <Handle toggle={toggle} position={[-6.4, -0.7, -2]} />
      <Handle toggle={toggle} position={[-4.7, -0.7, -2]} />
    </>
  );
};

export default VanityHandles;
