import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import User from './models/userModel.js'
import Recruiter from './models/recruiterModel.js'
import JobOpening from './models/jobOpeningModel.js'
import Application from './models/applicationModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Application.deleteMany()
        await JobOpening.deleteMany()
        await Recruiter.deleteMany()
        await User.deleteMany()

        console.log('Existing data cleared...'.red.inverse)

        // Seed Students
        const student1 = await User.create({
            name: 'Rahul Sharma',
            email: 'student@liet.ac.in',
            collegeEmail: 'rahul.student@liet.ac.in',
            rollNumber: 'LIET2023001',
            phone: '9876543210',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 8.8,
            tenthPercentage: 92,
            twelfthPercentage: 90,
            department: 'Information Technology',
            programme: 'B.Tech',
            lookingFor: 'FTE',
            dateOfBirth: '2002-05-15',
            verified: true,
            isAdmin: false,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        const student2 = await User.create({
            name: 'Ananya Verma',
            email: 'ananya.verma@liet.ac.in',
            collegeEmail: 'ananya.student@liet.ac.in',
            rollNumber: 'LIET2023002',
            phone: '9876543211',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 9.1,
            tenthPercentage: 95,
            twelfthPercentage: 94,
            department: 'Electronics & Communication',
            programme: 'B.Tech',
            lookingFor: 'FTE',
            dateOfBirth: '2002-08-20',
            verified: true,
            isAdmin: false,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        const student3 = await User.create({
            name: 'Vikram Singh',
            email: 'vikram.singh@liet.ac.in',
            collegeEmail: 'vikram.student@liet.ac.in',
            rollNumber: 'LIET2023003',
            phone: '9876543212',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 8.5,
            tenthPercentage: 88,
            twelfthPercentage: 86,
            department: 'Information Technology',
            programme: 'M.Tech',
            lookingFor: 'FTE',
            dateOfBirth: '2000-11-10',
            verified: true,
            isAdmin: false,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        const student4 = await User.create({
            name: 'Priya Patel',
            email: 'priya.patel@liet.ac.in',
            collegeEmail: 'priya.student@liet.ac.in',
            rollNumber: 'LIET2023004',
            phone: '9876543213',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 9.4,
            tenthPercentage: 96,
            twelfthPercentage: 95,
            department: 'IT-Business Informatics',
            programme: 'B.Tech',
            lookingFor: 'FTE',
            dateOfBirth: '2002-03-25',
            verified: true,
            isAdmin: false,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        const student5 = await User.create({
            name: 'Amit Kumar',
            email: 'amit.kumar@liet.ac.in',
            collegeEmail: 'amit.student@liet.ac.in',
            rollNumber: 'LIET2023005',
            phone: '9876543214',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 8.2,
            tenthPercentage: 85,
            twelfthPercentage: 84,
            department: 'Data Science & Analytics',
            programme: 'M.Tech',
            lookingFor: 'Internship',
            dateOfBirth: '2001-07-12',
            verified: true,
            isAdmin: false,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        const studentHanshika = await User.create({
            name: 'Hanshika Tyagi',
            email: 'hanshika.tyagi@liet.ac.in',
            collegeEmail: 'hanshika.student@liet.ac.in',
            rollNumber: 'LIET2023006',
            phone: '9876543215',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 9.3,
            tenthPercentage: 94,
            twelfthPercentage: 93,
            department: 'Information Technology',
            programme: 'B.Tech',
            lookingFor: 'FTE',
            dateOfBirth: '2003-02-14',
            verified: true,
            isAdmin: false,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        // Seed Admin User
        await User.create({
            name: 'Admin Officer',
            email: 'admin@liet.ac.in',
            collegeEmail: 'admin.office@liet.ac.in',
            rollNumber: 'LIETADM001',
            phone: '9999999999',
            resume: '/uploads/sample_resume.pdf',
            cgpa: 9.5,
            tenthPercentage: 95,
            twelfthPercentage: 95,
            department: 'Information Technology',
            programme: 'B.Tech',
            lookingFor: 'FTE',
            dateOfBirth: '1995-01-01',
            verified: true,
            isAdmin: true,
            otpForEmail: '123456',
            otpForCollegeEmail: '123456',
            otpForPhone: '123456',
        })

        // Seed Recruiters
        const recruiterGoogle = await Recruiter.create({
            name: 'Jane Smith',
            email: 'recruiter@google.com',
            mobileNumber: '9876543211',
            phoneNumber: '0112345678',
            nameOftheCompany: 'Google India',
            designation: 'Technical Hiring Lead',
            officeAddress: 'Google India, Bangalore',
            modeOfRecruitment: 'Virtual',
            verified: true,
            verifiedByAdmin: true,
            otpForEmail: '123456',
            otpForMobileNumber: '123456',
        })

        const recruiterMicrosoft = await Recruiter.create({
            name: 'Satya Narayana',
            email: 'recruiter@microsoft.com',
            mobileNumber: '9876543222',
            phoneNumber: '0112345679',
            nameOftheCompany: 'Microsoft Corporation',
            designation: 'Senior Talent Acquisition Manager',
            officeAddress: 'Microsoft Campus, Hyderabad',
            modeOfRecruitment: 'Hybrid',
            verified: true,
            verifiedByAdmin: true,
            otpForEmail: '123456',
            otpForMobileNumber: '123456',
        })

        const recruiterAmazon = await Recruiter.create({
            name: 'Rohan Mehta',
            email: 'recruiter@amazon.com',
            mobileNumber: '9876543233',
            phoneNumber: '0112345680',
            nameOftheCompany: 'Amazon Development Centre',
            designation: 'University Relations Lead',
            officeAddress: 'Amazon World Trade Center, Bangalore',
            modeOfRecruitment: 'Virtual',
            verified: true,
            verifiedByAdmin: true,
            otpForEmail: '123456',
            otpForMobileNumber: '123456',
        })

        const recruiterAdobe = await Recruiter.create({
            name: 'Kavita Roy',
            email: 'recruiter@adobe.com',
            mobileNumber: '9876543244',
            phoneNumber: '0112345681',
            nameOftheCompany: 'Adobe Systems',
            designation: 'Lead Technical Recruiter',
            officeAddress: 'Adobe Towers, Noida',
            modeOfRecruitment: 'On-Campus',
            verified: true,
            verifiedByAdmin: true,
            otpForEmail: '123456',
            otpForMobileNumber: '123456',
        })

        const recruiterTCS = await Recruiter.create({
            name: 'Sneha Kulkarni',
            email: 'recruiter@tcs.com',
            mobileNumber: '9876543255',
            phoneNumber: '0112345682',
            nameOftheCompany: 'Tata Consultancy Services',
            designation: 'Campus Placement Officer',
            officeAddress: 'TCS House, Mumbai',
            modeOfRecruitment: 'On-Campus',
            verified: true,
            verifiedByAdmin: true,
            otpForEmail: '123456',
            otpForMobileNumber: '123456',
        })

        // Seed Job Openings
        const jobGoogle = await JobOpening.create({
            recruiter: recruiterGoogle._id,
            nameOftheCompany: 'Google India',
            natureOfBusiness: 'Technology & Cloud Infrastructure',
            typeOfJobOpening: 'FTE',
            jobDesignation: 'Software Development Engineer (SDE I)',
            tentativeJoiningDate: new Date('2026-07-01'),
            tentativeJobLocation: 'Bangalore / Hyderabad',
            jobDescription: 'Design and build high-throughput distributed backend services, storage engines, and search infrastructure.',
            minIntakeOfStudents: 5,
            maxIntakeOfStudents: 15,
            bTechIT: true,
            bTechITBI: true,
            bTechECE: true,
            mTechIT: true,
            mTechECE: false,
            mTechDSA: true,
            mTechBI: true,
            mba: false,
            bTechCTC: '30 LPA',
            bTechBasePay: '18 LPA',
            bTechStocks: '10 LPA',
            bTechStockOptions: '2 LPA',
            bTechDetailedBreakDown: 'Base: 18L, Joining Bonus: 2L, Stocks: 10L vested over 4 years',
            mTechCTC: '32 LPA',
            mTechBasePay: '20 LPA',
            mTechStocks: '10 LPA',
            mTechStockOptions: '2 LPA',
            mTechDetailedBreakDown: 'Base: 20L, Joining Bonus: 2L, Stocks: 10L vested over 4 years',
            relocationBenefits: 'Relocation allowance + 15 days corporate stay',
            serviceBond: 'None',
            medicalRequirements: 'Standard Health Checkup',
            tenthPercentage: 75,
            twelfthPercentage: 75,
            cgpa: 7.5,
            aptitudeTest: true,
            onlineTechnicalTest: true,
            groupDiscussion: false,
            technicalInterviews: true,
            hrInterviews: true,
            verifiedByAdmin: true,
            formDeadline: new Date('2026-12-31'),
            image: '/uploads/sample_company.png',
        })

        const jobMicrosoft = await JobOpening.create({
            recruiter: recruiterMicrosoft._id,
            nameOftheCompany: 'Microsoft Corporation',
            natureOfBusiness: 'Software & Enterprise Cloud',
            typeOfJobOpening: 'FTE',
            jobDesignation: 'Software Engineer (Azure Platform)',
            tentativeJoiningDate: new Date('2026-06-15'),
            tentativeJobLocation: 'Hyderabad / Noida',
            jobDescription: 'Build next-generation Azure cloud tools, Microservices, and AI Copilot backend integrations.',
            minIntakeOfStudents: 4,
            maxIntakeOfStudents: 12,
            bTechIT: true,
            bTechITBI: true,
            bTechECE: true,
            mTechIT: true,
            mTechECE: true,
            mTechDSA: true,
            mTechBI: false,
            mba: false,
            bTechCTC: '28 LPA',
            bTechBasePay: '17 LPA',
            bTechStocks: '9 LPA',
            bTechStockOptions: '2 LPA',
            bTechDetailedBreakDown: 'Base: 17L, Stocks: 9L, Joining Bonus: 2L',
            mTechCTC: '30 LPA',
            mTechBasePay: '19 LPA',
            mTechStocks: '9 LPA',
            mTechStockOptions: '2 LPA',
            mTechDetailedBreakDown: 'Base: 19L, Stocks: 9L, Joining Bonus: 2L',
            relocationBenefits: 'Full relocation package',
            serviceBond: 'None',
            medicalRequirements: 'Standard',
            tenthPercentage: 70,
            twelfthPercentage: 70,
            cgpa: 7.0,
            aptitudeTest: true,
            onlineTechnicalTest: true,
            groupDiscussion: false,
            technicalInterviews: true,
            hrInterviews: true,
            verifiedByAdmin: true,
            formDeadline: new Date('2026-12-30'),
            image: '/uploads/sample_company.png',
        })

        const jobAmazon = await JobOpening.create({
            recruiter: recruiterAmazon._id,
            nameOftheCompany: 'Amazon Development Centre',
            natureOfBusiness: 'E-Commerce & AWS Cloud Services',
            typeOfJobOpening: 'FTE',
            jobDesignation: 'Software Development Engineer (AWS)',
            tentativeJoiningDate: new Date('2026-07-15'),
            tentativeJobLocation: 'Bangalore / Chennai / Hyderabad',
            jobDescription: 'Develop scalable web services and cloud infrastructure components driving AWS global platforms.',
            minIntakeOfStudents: 8,
            maxIntakeOfStudents: 20,
            bTechIT: true,
            bTechITBI: true,
            bTechECE: true,
            mTechIT: true,
            mTechECE: false,
            mTechDSA: true,
            mTechBI: true,
            mba: false,
            bTechCTC: '32 LPA',
            bTechBasePay: '19.5 LPA',
            bTechStocks: '10.5 LPA',
            bTechStockOptions: '2 LPA',
            bTechDetailedBreakDown: 'Base: 19.5L, Bonus: 2L, RSU: 10.5L',
            mTechCTC: '34 LPA',
            mTechBasePay: '21.5 LPA',
            mTechStocks: '10.5 LPA',
            mTechStockOptions: '2 LPA',
            mTechDetailedBreakDown: 'Base: 21.5L, Bonus: 2L, RSU: 10.5L',
            relocationBenefits: 'Relocation flight + 1 month hotel stay',
            serviceBond: 'None',
            medicalRequirements: 'Standard',
            tenthPercentage: 75,
            twelfthPercentage: 75,
            cgpa: 7.5,
            aptitudeTest: true,
            onlineTechnicalTest: true,
            groupDiscussion: false,
            technicalInterviews: true,
            hrInterviews: true,
            verifiedByAdmin: true,
            formDeadline: new Date('2026-12-31'),
            image: '/uploads/sample_company.png',
        })

        const jobAdobe = await JobOpening.create({
            recruiter: recruiterAdobe._id,
            nameOftheCompany: 'Adobe Systems',
            natureOfBusiness: 'Digital Media & Creative Software',
            typeOfJobOpening: 'FTE',
            jobDesignation: 'Frontend & UI Systems Engineer',
            tentativeJoiningDate: new Date('2026-06-01'),
            tentativeJobLocation: 'Noida / Bangalore',
            jobDescription: 'Work on Adobe Creative Cloud web and desktop applications using React, WebAssembly, and modern JS.',
            minIntakeOfStudents: 3,
            maxIntakeOfStudents: 8,
            bTechIT: true,
            bTechITBI: true,
            bTechECE: true,
            mTechIT: true,
            mTechECE: false,
            mTechDSA: false,
            mTechBI: false,
            mba: false,
            bTechCTC: '26 LPA',
            bTechBasePay: '16 LPA',
            bTechStocks: '8 LPA',
            bTechStockOptions: '2 LPA',
            bTechDetailedBreakDown: 'Base: 16L, Bonus: 2L, RSUs: 8L',
            mTechCTC: '28 LPA',
            mTechBasePay: '18 LPA',
            mTechStocks: '8 LPA',
            mTechStockOptions: '2 LPA',
            mTechDetailedBreakDown: 'Base: 18L, Bonus: 2L, RSUs: 8L',
            relocationBenefits: 'Relocation Assistance',
            serviceBond: 'None',
            medicalRequirements: 'Standard',
            tenthPercentage: 70,
            twelfthPercentage: 70,
            cgpa: 7.0,
            aptitudeTest: false,
            onlineTechnicalTest: true,
            groupDiscussion: false,
            technicalInterviews: true,
            hrInterviews: true,
            verifiedByAdmin: true,
            formDeadline: new Date('2026-12-31'),
            image: '/uploads/sample_company.png',
        })

        const jobTCS = await JobOpening.create({
            recruiter: recruiterTCS._id,
            nameOftheCompany: 'Tata Consultancy Services',
            natureOfBusiness: 'IT Consulting & Business Solutions',
            typeOfJobOpening: 'FTE',
            jobDesignation: 'Systems Engineer & Research Associate',
            tentativeJoiningDate: new Date('2026-08-01'),
            tentativeJobLocation: 'Pan India',
            jobDescription: 'Provide IT solutions, cloud migration, and enterprise software engineering for global enterprise clients.',
            minIntakeOfStudents: 15,
            maxIntakeOfStudents: 40,
            bTechIT: true,
            bTechITBI: true,
            bTechECE: true,
            mTechIT: true,
            mTechECE: true,
            mTechDSA: true,
            mTechBI: true,
            mba: true,
            bTechCTC: '12 LPA',
            bTechBasePay: '9 LPA',
            bTechStocks: '2 LPA',
            bTechStockOptions: '1 LPA',
            bTechDetailedBreakDown: 'Base: 9L, Performance Incentive: 2L, Retainers: 1L',
            mTechCTC: '14 LPA',
            mTechBasePay: '11 LPA',
            mTechStocks: '2 LPA',
            mTechStockOptions: '1 LPA',
            mTechDetailedBreakDown: 'Base: 11L, Performance Incentive: 2L, Retainers: 1L',
            relocationBenefits: 'Travel Allowance',
            serviceBond: '1 Year Bond',
            medicalRequirements: 'Standard',
            tenthPercentage: 60,
            twelfthPercentage: 60,
            cgpa: 6.5,
            aptitudeTest: true,
            onlineTechnicalTest: true,
            groupDiscussion: true,
            technicalInterviews: true,
            hrInterviews: true,
            verifiedByAdmin: true,
            formDeadline: new Date('2026-12-31'),
            image: '/uploads/sample_company.png',
        })

        // Seed Sample Applications
        await Application.create({
            user: student1._id,
            jobOpening: jobGoogle._id,
            aptitudeTest: 2, // cleared
            onlineTechnicalTest: 2, // cleared
            groupDiscussion: 0, // not applicable
            technicalInterviews: 1, // pending
            hrInterviews: 1, // pending
        })

        await Application.create({
            user: student1._id,
            jobOpening: jobMicrosoft._id,
            aptitudeTest: 2, // cleared
            onlineTechnicalTest: 2, // cleared
            groupDiscussion: 0,
            technicalInterviews: 2, // cleared
            hrInterviews: 2, // cleared
        })

        await Application.create({
            user: student2._id,
            jobOpening: jobAmazon._id,
            aptitudeTest: 2,
            onlineTechnicalTest: 2,
            groupDiscussion: 0,
            technicalInterviews: 1,
            hrInterviews: 1,
        })

        await Application.create({
            user: student3._id,
            jobOpening: jobAdobe._id,
            aptitudeTest: 0,
            onlineTechnicalTest: 2,
            groupDiscussion: 0,
            technicalInterviews: 2,
            hrInterviews: 1,
        })

        await Application.create({
            user: student4._id,
            jobOpening: jobGoogle._id,
            aptitudeTest: 2,
            onlineTechnicalTest: 2,
            groupDiscussion: 0,
            technicalInterviews: 2,
            hrInterviews: 2,
        })

        await Application.create({
            user: studentHanshika._id,
            jobOpening: jobGoogle._id,
            aptitudeTest: 2,
            onlineTechnicalTest: 2,
            groupDiscussion: 0,
            technicalInterviews: 2,
            hrInterviews: 2,
        })

        await Application.create({
            user: studentHanshika._id,
            jobOpening: jobAdobe._id,
            aptitudeTest: 0,
            onlineTechnicalTest: 2,
            groupDiscussion: 0,
            technicalInterviews: 1,
            hrInterviews: 1,
        })

        console.log('Multi-Company Dummy Data Imported Successfully!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Application.deleteMany()
        await JobOpening.deleteMany()
        await Recruiter.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
