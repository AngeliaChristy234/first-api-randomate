//Activities
class actClass {
  async getActivity() {
    const actResponse = await fetch('https://www.boredapi.com/api/activity');

    const actData = await actResponse.json()

    return {
      activity: actData.activity,
      type: actData.type,
      participants: actData.participants
    }
  }
}

// Dogs
class dogClass {
  async getDogName() {
    const dogNameRes = await fetch('https://dog.ceo/api/breeds/list/all');

    const dogNameData = await dogNameRes.json()
    const msg = dogNameData.message

    //Return value
    const dogNameArr = Object.keys(msg),
          dogNameLength  = dogNameArr.length

    return {
      dogNameArr,
      dogNameLength
    }
  }

  async getRandomDog(dogName) {
    const dogResponse = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)

    const dogData = await dogResponse.json()

    //Dog image in https url
    let dogImg = dogData.message
    
    return {
      dogImg,
      dogName
    }
  }
}

// Memes
class memeClass {
  async getMeme() {
    const memeResponse = await fetch('https://meme-api.herokuapp.com/gimme');
    
    const memeData = await memeResponse.json()
    
    return {
      memeTitle: memeData.title,
      memeImg: memeData.url
    }
  }
}