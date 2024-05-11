"use client"
import Navbar from '@/components/Navbar'
import TutorProfileCard from '@/components/ui/tutorProfileCard';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function ProfilePage() {
  const { userId } = useParams();
  const [userData, setUserData] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [dataRetrieved, setDataRetrieved] = useState<boolean>(false);

  const receiveSignalFromChild = (signal: boolean) => {
    setShowSuccess(signal);

    setTimeout(() => {
      setShowSuccess(false);
    }, 10000);
  };

  const router = useRouter();

  const handleRefresh = (event: any) => {
    // location.reload();
    router.refresh();
  };

  const clear = async () => { 
    let user = null;
    let result = null;
    try {
      let url = process.env.NEXT_PUBLIC_HOSTNAME;
      user = await fetch(`${url}/user/get/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    } catch (err) {
      console.log(err);
    }
    result = await user?.json();

    setUserData(result);
    setDataRetrieved(true);
    console.log(dataRetrieved);
  };

  useEffect(() => {
    clear()
  }, [])

  return (
    <div>
      <Navbar />

      <div role="alert" className="alert " 
        style={{
          maxWidth: '70%',
          margin: '40px auto 0 auto',
          backgroundColor: '#91ff8b',
          display: showSuccess ? 'flex' : 'none'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Profile updated! <a href='' style={{ color: 'blue' }}>Refresh</a></span>
      </div>

      { dataRetrieved && (
        <TutorProfileCard userData={userData} sendSignalToParent={receiveSignalFromChild} />
      )}

      { !dataRetrieved && (
        <div className="wrapLoader" style={{
          width: 'fit-content',
          margin: '60px auto 0 auto'
        }}>
          <span className="loading loading-ring loading-lg"
          style={{
            backgroundColor: 'blue',
            width: '100px',
          }}
          ></span>
        </div>
      )}

    </div>
  )
}

export default ProfilePage