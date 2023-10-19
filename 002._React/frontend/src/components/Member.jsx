

export function Member({member}){
    console.log(member.image)
    return(
        <container>
            <p>{member.firstName} {member.lastName}</p>
            <img src={member.image} />
        </container>
    )
}