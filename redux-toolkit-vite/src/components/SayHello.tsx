import useGlobalContext from '../hooks/context/useGlobalContext';

const SayHello = () => {
  const { id, name, setId, setName } = useGlobalContext();

  return (
    <div>
      <h1 className="font-bold text-6xl text-amber-300">
        Hello {name} {id} world
      </h1>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(+e.target.value)}
      />
      <input
        type="text"
        name="name"
        id="name"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default SayHello;
