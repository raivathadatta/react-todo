function UlComponent({list,cb}){

    return (
        <ul className="w-[50%] flex flex-col items-start p-[2%]">
        {Object.keys(list).map((keys) => {
          return (
            <li key={keys + "1"}  className="h-[10%] p-[1%] border-solid">
              <label key={keys + "1"} className="ml-[5px]">
                <input type="checkbox" className="mr-2" key={keys + "1"} name={keys} value={keys} onClick={cb} />{keys}
              </label>
            </li>
          )
        })

        }
      </ul>

    )
}

export default UlComponent