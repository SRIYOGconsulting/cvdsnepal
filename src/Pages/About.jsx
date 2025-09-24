
import React from 'react'
import { appData } from '../constants'

const About = () => {
  return (
    <div>
      <h1>Who We Are</h1>
      <h2>Welcome to {appData.organizationName}</h2>
      <p>
        {" "}
        People with disability are the most vulnerable and marginalized group of
        people. They live in isolation, segregation, disparagement, poverty and
        virtual dependence on charity and even pity. They are the victim of the
        community misconception and stigmas denying them of their inalienable
        and recognized rights. As a result, they shut themselves from the world
        and they underestimate themselves thinking that they do not fit in the
        society like other able-bodied children.
        <br />
        Thus, it becomes a painful reality how there is limited involvement or
        we can find no involvement of their parents or guardians in formulation
        and implementation of the policies related to them. In addition, the
        programs introduced by the Government have not benefitted them much.
        Therefore, non-governmental organizations have been providing care and
        different needed support activities targeting people with disabilities.
        <br />
        Conflict Victim and Disable Society ({appData.organizationName}) is one of these
        non- profit organizations located at {appData.municipality} Municipality-{appData.wardno},{" "}  
         {appData.address1},{" "} {appData.address2},{" "} {appData.city}. This organization has been devoting
        unceasingly with the aim of supporting the people with disability in
        Nepal since {appData.established}. The organization has been providing food, clothes,
        shelter, basic care and support to till date mentally and physically
        disabled children through the ‘Rehabilitation Center for Children with
        disability due to Cerebral Palsy (CP)’ project. <br />
        <br />
      
      </p>
      <h2>Vision</h2>
      <p>
        Children with disability due to Cerebral Palsy by making them capable
        enough to lead an independent life thereby mainstreaming them towards
        national development.
      </p>

      <h2>Mission</h2>
      <p>
        The mission of CVDS is to create pathways for the progressive removal of
        societal bias and the negative stereotypes that exist today. To
        overshadow the prejudice prevalent in {appData.country} regarding the image of
        psychiatrist disabled people and hence provide equal opportunities for
        them till they live. To motivate and involve disabled and conflict
        victims in various activities by giving them knowledge about dancing,
        music, toileting, art, and formal education. For the benefit of the
        kids, programs relating to personality development of the target groups
        will be conducted by a medical practitioner, caregiver, therapist,
        teacher, and administrative personnel.
      </p>
    </div>
  );
};

export default About;
