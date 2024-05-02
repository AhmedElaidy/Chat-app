function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text font-bold">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text font-bold">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;

// Starter COde
// function GenderCheckbox() {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//           <span className="label-text font-bold">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//           <span className="label-text font-bold">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GenderCheckbox;
