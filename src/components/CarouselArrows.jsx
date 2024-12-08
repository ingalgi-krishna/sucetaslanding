import React from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NextArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-arrow next-arrow`}
    onClick={onClick}
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

export const PrevArrow = ({ className, onClick }) => (
  <button
    className={`${className} custom-arrow prev-arrow`}
    onClick={onClick}
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
