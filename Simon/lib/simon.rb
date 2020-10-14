class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    puts "GET READY TO LOSE JIVE TURKEY"
    until game_over
    take_turn
          system("clear")

    end
      
      if game_over
      game_over_message
      reset_game
    end
  end

  def take_turn
show_sequence
require_sequence
    if game_over == false
    round_success_message
    @sequence_length += 1
    end
end
  def show_sequence
    add_random_color

  end

  def require_sequence
       input = gets.chomp.split

    @game_over = true unless input == @seq

  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts 'GOOD ROUND TURKEY'
  end

  def game_over_message
    puts "THIS GAME IS OVER JIVE TURKEY"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
    play

  end


end#! end of class
