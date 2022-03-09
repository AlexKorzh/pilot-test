let colorsItems = [];

for (let i = 1; i < 10; i++) {
    colorsItems.push(`${i}00`);
}


const Colors = () => {
  return (
      <div className="shadow-base p-2">
        <h2>Colors</h2>
        <div className="colors mt-2 pl-3">
        {colorsItems.map((color) => (
            <div 
                key={color} 
                style={{ width: 400, height: 100 }}
                className={`bg-p-${color}`}
            />
        ))}
        </div>
    </div>
  );
};

export default Colors;
