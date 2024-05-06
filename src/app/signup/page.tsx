"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import StudentSignupForm from "@/components/forms/StudentSignupForm";
import TutorSignupForm from "@/components/forms/TutorSignupForm";

export default function SignUp() {
    const [studentDisplay, setStudentDisplay] = useState('block');
    const [tutorDisplay, setTutorDisplay] = useState('none');
    const [studentBtnGlow, setStudentBtnGlow] = useState('0 0 10px rgba(0, 0, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)');
    const [tutorBtnGlow, setTutorBtnGlow] = useState('');

    return (
        <div className="dark min-h-screen flex items-center justify-center bg-white">
            <div
                className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
                style={{
                    boxShadow: '0 8px 14px 0 rgba(0, 0, 0, 0.3)',
                }}
            >
                <h2 className="text-2xl font-semibold text-black text-center">Sign up</h2>
                <p className="mt-2 text-center text-gray-400">
                    Access more features by signing in
                </p>

                <div className="user-type" style={{ display: 'grid', gridTemplateColumns: '48% 48%', gridGap: '4%', marginTop: 20 }}>
                  <div 
                    className="student" 
                    style={{
                      backgroundColor: '#ec9b9b',
                      textAlign: 'center',
                      color: 'white',
                      padding: 5,
                      cursor: 'pointer',
                      boxShadow: studentBtnGlow,
                      borderRadius: 8,
                      transition: 'box-shadow 0.3s ease'
                    }}
                    onClick={() => {
                      // show student
                      setStudentDisplay('block');
                      setStudentBtnGlow('0 0 10px rgba(0, 0, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)');
                      setTutorDisplay('none');
                      setTutorBtnGlow('');
                    }}  
                  >Student</div>

                  <div 
                    className="tutor" 
                    style={{
                      backgroundColor: 'rgb(59, 130, 246)',
                      textAlign: 'center',
                      color: 'white',
                      padding: 5,
                      cursor: 'pointer',
                      boxShadow: tutorBtnGlow,
                      borderRadius: 8,
                      transition: 'box-shadow 0.3s ease'
                    }}
                    onClick={() => {
                      // show Tutor
                      setStudentDisplay('none');
                      setStudentBtnGlow('');
                      setTutorDisplay('block');
                      setTutorBtnGlow('0 0 10px rgba(0, 0, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)');
                    }}
                  >Tutor</div>
                </div>
                
                <div className="studentFormDiv" style={{ display: studentDisplay }}>
                  <StudentSignupForm />
                </div>

                <div className="tutorFormDiv" style={{ display: tutorDisplay }}>
                  <TutorSignupForm />
                </div>
                
            </div>
        </div>
    );
}
