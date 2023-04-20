import User from "../modal/user-schema.js ";

export const userSignup = async (req, res) => {

    try {

        const exist = await User.findOne({ username: req.body.username })
        if (exist) {
            return res.status(401).json({ message: 'username already exists' })
        }
        // console.log(req.body); 
        const user = req.body;
        const newUser = new User(user)
        await newUser.save();   // when we want to save one object in db then we save() fucntion
        res.status(200).json({ message: user })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const userLogin = async (req, res) => {

    try {
        const username = req.body.username;
        const password = req.body.password;
        // we are sending username and password we are hitting
        let user = await User.findOne({ username: username, password: password });
        // if user exist we are checking
        if (user) {
            return res.status(200).json({data:user})
        } else {
            return res.status(401).json('Invalid Login')
        }
    }
    catch (error) {
        res.status(500).json('Error', error.message)
    }
}