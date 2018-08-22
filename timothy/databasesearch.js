const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query){
      const queryKeys = Object.keys(query);
      return arr.find(hero => 
        !queryKeys.find(key => query[key] !== hero[key])
    ) || null;
  }
  /*
  console.log(findOne(HEROES, { id: 1 }));
  console.log(findOne(HEROES, { id: 10 }));
  console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
  console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
  console.log(findOne(HEROES, { squad: 'Justice League' }));
  */