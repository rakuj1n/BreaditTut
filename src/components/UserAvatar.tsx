import { User } from 'next-auth'
import { FC } from 'react'
import { Avatar,AvatarFallback } from './ui/avatar'
import Image from 'next/image'
import { Icons } from './Icons'

interface UserAvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  return (
    <Avatar>
        {user.image ? (
            <div className='relative aspect-square h-full w-full'>
                <Image 
                    fill
                    src={user.image}
                    alt='profile-pic'
                    referrerPolicy='no-referrer'
                />
            </div>
        ) : (
            <AvatarFallback>
                <span className='sr-only'>{user?.name}</span>
                <Icons.user />
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar