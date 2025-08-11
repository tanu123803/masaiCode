
const createNewGame = async(req,res)=>{
    const game=newgame(req.body)
    const savedgames= await game.save
}