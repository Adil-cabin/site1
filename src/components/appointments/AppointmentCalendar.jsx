import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment submission
    console.log('Rendez-vous programmé:', {
      date: selectedDate,
      time: selectedTime
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <div className="mb-8">
        <div className="relative">
          <div className="absolute left-0 top-1/2 w-full border-t border-gray-300" />
          <div className="relative flex justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= stepNumber ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                } relative z-10`}
              >
                {stepNumber}
              </div>
            ))}
          </div>
        </div>
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Choisissez une date</h3>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateSelect}
            inline
            locale={fr}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="w-full"
          />
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Choisissez un horaire</h3>
          <div className="grid grid-cols-3 gap-4">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 text-center rounded-lg transition-colors ${
                  selectedTime === time
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-4">Confirmez votre rendez-vous</h3>
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Date: {format(selectedDate, 'dd MMMM yyyy', { locale: fr })}
            </p>
            <p className="text-gray-600">Heure: {selectedTime}</p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            Confirmer le rendez-vous
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}