import React, { useState } from "react";
import faker from "faker";
import styled from "styled-components";

const people = Array.from(Array(30), () => ({
  name: faker.name.findName(),
  street: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  telephone: faker.phone.phoneNumber(),
  birthday: faker.date.past(),
}));

interface iUser {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  telephone: string;
  birthday: Date;
}

const CauseEffect = () => {
  const [selectedUser, setSelectedUser] = useState<iUser>(people[0]);
  const onClickHandler = (user: iUser) => {
    setSelectedUser(user);
  };
  return (
    <Container>
      <nav>
        <ul>
          {people.map((p) => (
            <li
              key={p.telephone}
              className={selectedUser.name === p.name ? "active" : ""}
              onClick={() => onClickHandler(p)}
            >
              {p.name}
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <label htmlFor='name'>
          이름
          <span className='name'>{selectedUser.name}</span>
        </label>
        <label htmlFor='address'>
          주소
          <span className='address'>
            {selectedUser.city +
              " " +
              selectedUser.country +
              " " +
              selectedUser.state +
              " " +
              selectedUser.street}
          </span>
        </label>
        <label htmlFor='phone'>
          연락처
          <span className='phone'>{selectedUser.telephone}</span>
        </label>
        <label htmlFor='birth'>
          생일
          <span className='birth'>
            {selectedUser.birthday.toLocaleString()}
          </span>
        </label>
      </section>
    </Container>
  );
};

export default CauseEffect;

const Container = styled.div`
  display: flex;
  nav {
    padding: 2rem;
    border-right: 2px solid black;
    min-width: 300px;
    ul {
      list-style: none;
      li {
        font-size: 1.5rem;
        opacity: 0.7;
        &:hover {
          opacity: 1;
          color: red;
        }
        &.active {
          font-weight: bold;
          opacity: 1;
        }
      }
      li + li {
        margin-top: 1rem;
      }
    }
  }

  section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    label {
      font-size: 2rem;
      span {
        margin-left: 2rem;
      }
    }
  }
`;
