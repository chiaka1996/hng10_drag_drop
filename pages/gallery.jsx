import React, { useState, useEffect, useRef } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import NavBar from '../Components/NavBar/NavBar';
import Sidebar from '../Components/SideBar/SideBar';
import css from '../styles/gallery.module.css';
import Image from 'next/image';
import Product from '../Components/Pictures/Gallery';
import Footer from '../Components/Footer/Footer';
import { useRouter } from 'next/router';

const SortablePics = ({ pics }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: pics.id });

  const styles = {
    transition,
    transform: CSS.Transform.toString()
  };
  return (
    <div style={styles} ref={setNodeRef} {...attributes} {...listeners}>
      <Product img={pics.image} name={pics.name} id={pics.id} tag={pics.tag} />
    </div>
  );
};

const Gallery = () => {
  const router = useRouter();
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(mouseSensor, touchSensor);
  const tagList = [
    'Editorial',
    'Fashion',
    'Optics',
    'Art and Museum',
    'Nature'
  ];

  const [showCategory, setShowCategory] = useState(true);
  const [filterGallery, setFilterGallery] = useState([]);
  const [searchText, setSearchText] = useState('');

  const gallery = [
    {
      id: 1,
      name: 'PHILOMENA `22',
      image: '/Rectangle1.png',
      tag: 'Art and Museum'
    },
    {
      id: 2,
      name: 'Boolean Egyptian',
      image: '/Rectangle2.png',
      tag: 'Editorial'
    },
    {
      id: 3,
      name: 'Blanc',
      image: '/Rectangle3.png',
      tag: 'Fashion'
    },
    {
      id: 4,
      name: 'ELLIPSIA',
      image: '/Rectangle4.png',
      tag: 'Optics'
    },
    {
      id: 5,
      name: 'Lawmakers',
      image: '/Rectangle5.png',
      tag: 'Art and Museum'
    },
    {
      id: 6,
      name: 'Veil',
      image: '/Rectangle6.png',
      tag: 'Fashion'
    },
    {
      id: 7,
      name: 'Alternating',
      image: '/Rectangle7.png',
      tag: 'Optics'
    },
    {
      id: 8,
      name: 'Rosemary `22',
      image: '/Rectangle8.png',
      tag: 'Fashion'
    },
    {
      id: 9,
      name: 'Beverly',
      image: '/Rectangle9.png',
      tag: 'Nature'
    },
    {
      id: 10,
      name: 'Sassy',
      image: '/explore1.png',
      tag: 'Editorial'
    },
    {
      id: 11,
      name: 'Blonde Beauty',
      image: '/explore2.png',
      tag: 'Art and Museum'
    },
    {
      id: 12,
      name: 'Pyramid 1997',
      image: '/pyramid.png',
      tag: 'Art and Museum'
    },
    {
      id: 13,
      name: 'Are We There Yet',
      image: '/mummies.png',
      tag: 'Editorial'
    }
  ];

  const onDragEnd = event => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setFilterGallery(gal => {
      const oldIndex = gal.findIndex(gal => gal.id === active.id);
      const newIndex = gal.findIndex(gal => gal.id === over.id);

      return arrayMove(gal, oldIndex, newIndex);
    });
  };

  const showCat = () => {
    setShowCategory(x => !x);
  };

  const checkIfUserIsLoggedIn = () => {
    const checkedIn = localStorage.getItem('galleryUser');
    if (!checkedIn) {
      router.push('/login');
    }
  };

  const onChangeSearchInput = e => {
    let value = e.target.value;
    setSearchText(value.toLowerCase());
  };

  const searchFunction = e => {
    let searchMap = [];

    gallery.map((item, i) => {
      if (item.tag.toLowerCase().includes(searchText)) {
        searchMap.push(item);
      }
    });

    setFilterGallery([...searchMap]);
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
    setFilterGallery([...gallery]);
  }, []);

  return (
    <div className={css.marketBody}>
      <NavBar page="gallery" />
      <Sidebar page="gallery" />

      <div className={css.searchContainer}>
        <div className={css.filtersContainer}>
          <div className={css.byCategory} onClick={showCat}>
            <div className={css.categoryText}>Tags</div>
            <div className={css.arrowContainer}>
              <Image
                src="/categoryArrow.png"
                alt="arrow up"
                fill
                className={
                  showCategory ? css.categoryImage : css.downCategoryArrow
                }
              />
            </div>
          </div>

          <div className={showCategory ? css.checkboxes : css.closeCheckboxes}>
            {tagList.map((item, i) => (
              <div className={css.checkContainer} key={i}>
                <div className={css.checkLabel} htmlFor={item}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={css.productsContainer}>
          <div className={css.inputSearch}>
            <input
              type="text"
              placeholder="Search by Tags"
              value={searchText}
              onChange={onChangeSearchInput}
            />

            <button onClick={searchFunction}>Search</button>
          </div>

          <div className={css.prods}>
            <DndContext
              collisionDetection={closestCenter}
              sensors={sensors}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={filterGallery}
                strategy={verticalListSortingStrategy}
              >
                {filterGallery.map((pic, i) => (
                  <SortablePics key={pic.id} pics={pic} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
